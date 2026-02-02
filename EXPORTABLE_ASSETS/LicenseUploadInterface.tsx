import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, Check, X, AlertCircle, Camera, FileText, Eye, Trash2 } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';

/**
 * LICENSE UPLOAD INTERFACE - EXPORTABLE ASSET
 * 
 * A comprehensive driver's license upload component with validation,
 * preview, and status feedback.
 * 
 * Usage:
 * ```tsx
 * <LicenseUploadInterfaceExport
 *   onUpload={(files) => console.log('Uploaded:', files)}
 *   maxFiles={2}
 *   requiredSides={['front', 'back']}
 *   acceptedFormats={['image/jpeg', 'image/png', 'application/pdf']}
 * />
 * ```
 * 
 * Features:
 * - Drag & drop upload
 * - Click to browse
 * - Front & back side tracking
 * - File preview with thumbnails
 * - Format validation (JPEG, PNG, PDF)
 * - Size validation (max 5MB per file)
 * - Progress indicators
 * - Error handling
 * - OCR-ready structure
 * - Mobile camera capture
 */

export interface UploadedFile {
  id: string;
  file: File;
  preview: string;
  side: 'front' | 'back';
  status: 'uploading' | 'success' | 'error';
  error?: string;
}

export interface LicenseUploadInterfaceExportProps {
  onUpload: (files: UploadedFile[]) => void;
  onValidate?: (file: File) => Promise<{ valid: boolean; error?: string }>;
  maxFiles?: number;
  maxSizeMB?: number;
  requiredSides?: ('front' | 'back')[];
  acceptedFormats?: string[];
  showPreview?: boolean;
  allowCamera?: boolean;
}

export function LicenseUploadInterfaceExport({
  onUpload,
  onValidate,
  maxFiles = 2,
  maxSizeMB = 5,
  requiredSides = ['front', 'back'],
  acceptedFormats = ['image/jpeg', 'image/png', 'application/pdf'],
  showPreview = true,
  allowCamera = true
}: LicenseUploadInterfaceExportProps) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [currentSide, setCurrentSide] = useState<'front' | 'back'>('front');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFiles(files);
    }
  };

  const handleFiles = async (files: File[]) => {
    if (uploadedFiles.length + files.length > maxFiles) {
      alert(`Maximum ${maxFiles} files allowed`);
      return;
    }

    for (const file of files) {
      // Validate format
      if (!acceptedFormats.includes(file.type)) {
        alert(`Invalid format. Accepted: ${acceptedFormats.join(', ')}`);
        continue;
      }

      // Validate size
      if (file.size > maxSizeMB * 1024 * 1024) {
        alert(`File too large. Maximum size: ${maxSizeMB}MB`);
        continue;
      }

      const uploadedFile: UploadedFile = {
        id: Math.random().toString(36),
        file,
        preview: URL.createObjectURL(file),
        side: currentSide,
        status: 'uploading'
      };

      setUploadedFiles(prev => [...prev, uploadedFile]);

      // Custom validation if provided
      if (onValidate) {
        try {
          const result = await onValidate(file);
          setUploadedFiles(prev =>
            prev.map(f =>
              f.id === uploadedFile.id
                ? { ...f, status: result.valid ? 'success' : 'error', error: result.error }
                : f
            )
          );
        } catch (error) {
          setUploadedFiles(prev =>
            prev.map(f =>
              f.id === uploadedFile.id
                ? { ...f, status: 'error', error: 'Validation failed' }
                : f
            )
          );
        }
      } else {
        // Auto-success if no validation
        setTimeout(() => {
          setUploadedFiles(prev =>
            prev.map(f =>
              f.id === uploadedFile.id ? { ...f, status: 'success' } : f
            )
          );
        }, 1000);
      }

      // Move to next side if this side is complete
      if (currentSide === 'front' && requiredSides.includes('back')) {
        setCurrentSide('back');
      }
    }
  };

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== id));
  };

  const handleCameraCapture = () => {
    if (fileInputRef.current) {
      fileInputRef.current.setAttribute('capture', 'environment');
      fileInputRef.current.click();
    }
  };

  const handleBrowse = () => {
    if (fileInputRef.current) {
      fileInputRef.current.removeAttribute('capture');
      fileInputRef.current.click();
    }
  };

  const hasSide = (side: 'front' | 'back') => {
    return uploadedFiles.some(f => f.side === side && f.status === 'success');
  };

  const isComplete = () => {
    return requiredSides.every(side => hasSide(side));
  };

  const handleSubmit = () => {
    if (isComplete()) {
      onUpload(uploadedFiles);
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Driver's License</h2>
        <p className="text-sm text-gray-600">
          {requiredSides.length === 2 
            ? 'Please upload both front and back sides' 
            : 'Please upload your license'}
        </p>
      </div>

      {/* Side Selector */}
      {requiredSides.length === 2 && (
        <div className="flex gap-3">
          {(['front', 'back'] as const).map((side) => (
            <button
              key={side}
              onClick={() => setCurrentSide(side)}
              className={`flex-1 p-4 rounded-2xl border-2 transition-all ${
                currentSide === side
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 border-orange-500 text-white'
                  : hasSide(side)
                  ? 'bg-green-50 border-green-500 text-green-700'
                  : 'bg-white border-gray-200 text-gray-700'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                {hasSide(side) ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <FileText className="w-5 h-5" />
                )}
                <span className="font-bold text-sm capitalize">{side} Side</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Upload Zone */}
      <Card
        className={`relative rounded-3xl border-2 border-dashed transition-all ${
          isDragging
            ? 'border-orange-500 bg-orange-50'
            : 'border-gray-300 bg-white hover:border-gray-400'
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="p-8 text-center">
          {/* Upload Icon */}
          <motion.div
            animate={{ y: isDragging ? -10 : 0 }}
            className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center"
          >
            <Upload className={`w-10 h-10 ${isDragging ? 'text-orange-600' : 'text-gray-600'}`} />
          </motion.div>

          {/* Instructions */}
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {isDragging ? 'Drop files here' : `Upload ${currentSide} side`}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Drag & drop or click to browse
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 max-w-xs mx-auto">
            <Button
              onClick={handleBrowse}
              className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl h-11 font-bold"
            >
              <FileText className="w-4 h-4 mr-2" />
              Browse Files
            </Button>
            {allowCamera && (
              <Button
                onClick={handleCameraCapture}
                variant="outline"
                className="w-full border-2 border-gray-300 rounded-xl h-11 font-bold"
              >
                <Camera className="w-4 h-4 mr-2" />
                Take Photo
              </Button>
            )}
          </div>

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept={acceptedFormats.join(',')}
            onChange={handleFileInput}
            className="hidden"
            multiple={false}
          />

          {/* Format Info */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Accepted formats: JPEG, PNG, PDF • Max size: {maxSizeMB}MB
            </p>
          </div>
        </div>
      </Card>

      {/* Uploaded Files Preview */}
      {showPreview && uploadedFiles.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-gray-900">Uploaded Files</h3>
          <AnimatePresence>
            {uploadedFiles.map((file) => (
              <motion.div
                key={file.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <Card className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200">
                  <div className="flex items-center gap-4 p-4">
                    {/* Thumbnail */}
                    <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                      {file.file.type.startsWith('image/') ? (
                        <img
                          src={file.preview}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FileText className="w-8 h-8 text-gray-400" />
                        </div>
                      )}
                    </div>

                    {/* File Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-gray-900 truncate">
                            {file.file.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {(file.file.size / 1024).toFixed(1)} KB • {file.side} side
                          </p>
                        </div>
                        <button
                          onClick={() => removeFile(file.id)}
                          className="ml-2 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors flex-shrink-0"
                        >
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>

                      {/* Status */}
                      <div className="flex items-center gap-2">
                        {file.status === 'uploading' && (
                          <>
                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1 }}
                                className="h-full bg-gradient-to-r from-orange-500 to-amber-500"
                              />
                            </div>
                            <Badge className="bg-blue-500 text-white border-0 text-xs flex-shrink-0">
                              Uploading...
                            </Badge>
                          </>
                        )}
                        {file.status === 'success' && (
                          <>
                            <div className="flex-1 h-2 bg-green-500 rounded-full" />
                            <Badge className="bg-green-500 text-white border-0 text-xs flex-shrink-0">
                              <Check className="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                          </>
                        )}
                        {file.status === 'error' && (
                          <>
                            <div className="flex-1 h-2 bg-red-500 rounded-full" />
                            <Badge className="bg-red-500 text-white border-0 text-xs flex-shrink-0">
                              <X className="w-3 h-3 mr-1" />
                              Error
                            </Badge>
                          </>
                        )}
                      </div>

                      {/* Error Message */}
                      {file.status === 'error' && file.error && (
                        <p className="text-xs text-red-600 mt-1">{file.error}</p>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Completion Status */}
      {requiredSides.length === 2 && uploadedFiles.length > 0 && (
        <Card className={`rounded-2xl p-4 border-2 ${
          isComplete()
            ? 'bg-green-50 border-green-500'
            : 'bg-orange-50 border-orange-500'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isComplete() ? 'bg-green-500' : 'bg-orange-500'
            }`}>
              {isComplete() ? (
                <Check className="w-6 h-6 text-white" />
              ) : (
                <AlertCircle className="w-6 h-6 text-white" />
              )}
            </div>
            <div className="flex-1">
              <p className={`text-sm font-bold ${
                isComplete() ? 'text-green-900' : 'text-orange-900'
              }`}>
                {isComplete() 
                  ? '✓ All required documents uploaded' 
                  : `Missing: ${requiredSides.filter(s => !hasSide(s)).join(', ')} side`}
              </p>
              <p className={`text-xs ${
                isComplete() ? 'text-green-700' : 'text-orange-700'
              }`}>
                {isComplete()
                  ? 'You can now proceed to the next step'
                  : 'Please upload the missing documents to continue'}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Submit Button */}
      {uploadedFiles.length > 0 && (
        <Button
          onClick={handleSubmit}
          disabled={!isComplete()}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl h-14 text-base font-bold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isComplete() ? (
            <>
              <Check className="w-5 h-5 mr-2" />
              Continue to Payment
            </>
          ) : (
            'Upload All Required Documents'
          )}
        </Button>
      )}

      {/* Help Section */}
      <Card className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-gray-900 mb-2">License Upload Tips</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Ensure all text is clearly visible</li>
              <li>• Avoid glare and shadows</li>
              <li>• Capture all four corners of the license</li>
              <li>• Use good lighting for best results</li>
              <li>• License must be valid and not expired</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}

// Simplified version for basic uploads
export function LicenseUploadSimple({
  onUpload
}: Pick<LicenseUploadInterfaceExportProps, 'onUpload'>) {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      onUpload([{
        id: '1',
        file: selectedFile,
        preview: URL.createObjectURL(selectedFile),
        side: 'front',
        status: 'success'
      }]);
    }
  };

  return (
    <Card className="bg-white rounded-2xl p-6 border-2 border-gray-200">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,application/pdf"
        onChange={handleFileChange}
        className="hidden"
      />
      <Button
        onClick={() => fileInputRef.current?.click()}
        className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl h-12 font-bold"
      >
        <Upload className="w-5 h-5 mr-2" />
        {file ? 'Change File' : 'Upload License'}
      </Button>
      {file && (
        <p className="text-xs text-green-600 text-center mt-2">
          ✓ {file.name} uploaded
        </p>
      )}
    </Card>
  );
}
