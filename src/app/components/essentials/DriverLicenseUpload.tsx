import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Upload, 
  Camera, 
  FileText, 
  Check, 
  X, 
  AlertCircle,
  Loader,
  Eye,
  Trash2,
  Shield,
  Scan,
  Info
} from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';

interface DriverLicenseUploadProps {
  onUpload?: (file: File) => void;
  onVerified?: (data: LicenseData) => void;
  variant?: 'full' | 'compact';
}

interface LicenseData {
  number: string;
  name: string;
  dob: string;
  expiryDate: string;
  vehicleClass: string;
  issueDate: string;
}

type VerificationStatus = 'idle' | 'uploading' | 'scanning' | 'verified' | 'failed';

export function DriverLicenseUpload({
  onUpload,
  onVerified,
  variant = 'full'
}: DriverLicenseUploadProps) {
  const [status, setStatus] = useState<VerificationStatus>('idle');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [showPreview, setShowPreview] = useState(false);
  const [licenseData, setLicenseData] = useState<LicenseData | null>(null);
  const [error, setError] = useState<string>('');

  // Simulated OCR scanning
  const simulateOCRScan = () => {
    setStatus('scanning');
    
    setTimeout(() => {
      // Simulated extracted data
      const extractedData: LicenseData = {
        number: 'DL-1420110012345',
        name: 'Admin User Name',
        dob: '1990-01-15',
        expiryDate: '2029-12-31',
        vehicleClass: 'LMV, MCWG',
        issueDate: '2020-01-01'
      };
      
      setLicenseData(extractedData);
      setStatus('verified');
      onVerified?.(extractedData);
    }, 2500);
  };

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (JPG, PNG)');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }

    setError('');
    setUploadedFile(file);
    setStatus('uploading');

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
      simulateOCRScan();
    };
    reader.readAsDataURL(file);

    onUpload?.(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  };

  const handleDelete = () => {
    setUploadedFile(null);
    setPreview('');
    setStatus('idle');
    setLicenseData(null);
    setError('');
  };

  // Compact Variant
  if (variant === 'compact') {
    return (
      <Card className="bg-white rounded-3xl p-5 border-2 border-gray-200 shadow-lg">
        <h3 className="font-bold text-base text-gray-900 mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-purple-600" />
          Driver License
        </h3>

        {status === 'idle' && (
          <label className="block">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileSelect(file);
              }}
              className="hidden"
            />
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center cursor-pointer hover:border-purple-500 hover:bg-purple-50 transition-colors">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-700">Upload License</p>
              <p className="text-xs text-gray-500 mt-1">JPG or PNG, max 5MB</p>
            </div>
          </label>
        )}

        {status === 'verified' && licenseData && (
          <div className="bg-green-50 rounded-2xl p-4 border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Check className="w-5 h-5 text-green-600" />
              <p className="text-sm font-bold text-green-900">Verified</p>
            </div>
            <p className="text-xs text-green-700">License: {licenseData.number}</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 rounded-xl p-3 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-red-700">{error}</p>
          </div>
        )}
      </Card>
    );
  }

  // Full Variant
  return (
    <div className="space-y-4">
      {/* Upload Section */}
      {status === 'idle' && (
        <Card className="bg-white rounded-3xl p-6 border-2 border-gray-200 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base text-gray-900">Driver License Verification</h3>
              <p className="text-xs text-gray-600">Upload your valid driving license for verification</p>
            </div>
          </div>

          {/* Drag & Drop Area */}
          <label
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileSelect(file);
              }}
              className="hidden"
            />
            <div className="border-3 border-dashed border-gray-300 rounded-3xl p-8 text-center cursor-pointer hover:border-purple-500 hover:bg-purple-50 transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-10 h-10 text-purple-600" />
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2">Upload License Photo</h4>
              <p className="text-sm text-gray-600 mb-4">
                Drag and drop or click to browse
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <Badge className="bg-purple-100 text-purple-700 border-0">
                  <FileText className="w-3 h-3 mr-1" />
                  JPG, PNG
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 border-0">
                  Max 5MB
                </Badge>
              </div>
            </div>
          </label>

          {/* Camera Option */}
          <div className="mt-4">
            <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-cyan-700">
              <Camera className="w-5 h-5 mr-2" />
              Take Photo with Camera
            </Button>
          </div>

          {/* Requirements */}
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-200 mt-4">
            <p className="text-xs font-semibold text-blue-900 mb-2">Requirements:</p>
            <div className="space-y-1.5">
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-800">Clear, well-lit photo of your license</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-800">All text must be readable</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-800">Valid license (not expired)</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-800">Must include LMV or MCWG class</p>
              </div>
            </div>
          </Card>
        </Card>
      )}

      {/* Uploading State */}
      {status === 'uploading' && (
        <Card className="bg-white rounded-3xl p-6 border-2 border-purple-300 shadow-lg">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Loader className="w-10 h-10 text-purple-600 animate-spin" />
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-2">Uploading...</h4>
            <p className="text-sm text-gray-600">Please wait while we upload your document</p>
          </div>
        </Card>
      )}

      {/* Scanning State */}
      {status === 'scanning' && (
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 border-2 border-purple-300 shadow-lg">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Scan className="w-10 h-10 text-white animate-pulse" />
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-2">Scanning License...</h4>
            <p className="text-sm text-gray-600 mb-4">
              Our AI is extracting information from your license
            </p>
            
            {/* Preview while scanning */}
            {preview && (
              <div className="relative w-full max-w-sm mx-auto mt-4">
                <img 
                  src={preview} 
                  alt="License preview" 
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent rounded-2xl"></div>
                
                {/* Scanning Animation */}
                <motion.div
                  animate={{ y: [0, 200, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                  style={{ top: 0 }}
                />
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Verified State */}
      {status === 'verified' && licenseData && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 border-2 border-green-300 shadow-lg">
            {/* Success Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-green-900">License Verified!</h3>
                  <p className="text-xs text-green-700">All details extracted successfully</p>
                </div>
              </div>
              <Badge className="bg-green-600 text-white border-0">
                <Shield className="w-3 h-3 mr-1" />
                Valid
              </Badge>
            </div>

            {/* Extracted Data */}
            <div className="bg-white rounded-2xl p-4 mb-4 space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-xs text-gray-600">License Number</span>
                <span className="text-sm font-bold text-gray-900">{licenseData.number}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-xs text-gray-600">Name</span>
                <span className="text-sm font-bold text-gray-900">{licenseData.name}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-xs text-gray-600">Date of Birth</span>
                <span className="text-sm font-semibold text-gray-900">
                  {new Date(licenseData.dob).toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-xs text-gray-600">Vehicle Class</span>
                <span className="text-sm font-semibold text-gray-900">{licenseData.vehicleClass}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-xs text-gray-600">Issue Date</span>
                <span className="text-sm font-semibold text-gray-900">
                  {new Date(licenseData.issueDate).toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-xs text-gray-600">Expiry Date</span>
                <span className="text-sm font-semibold text-green-600">
                  {new Date(licenseData.expiryDate).toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={() => setShowPreview(true)}
                className="flex-1 h-10 bg-white border-2 border-green-300 text-green-700 rounded-xl font-semibold hover:bg-green-50"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Original
              </Button>
              <Button
                onClick={handleDelete}
                className="flex-1 h-10 bg-white border-2 border-red-300 text-red-700 rounded-xl font-semibold hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Remove
              </Button>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Failed State */}
      {status === 'failed' && (
        <Card className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-6 border-2 border-red-300 shadow-lg">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <X className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-2">Verification Failed</h4>
            <p className="text-sm text-gray-600 mb-4">
              {error || 'Unable to read the license. Please try again with a clearer image.'}
            </p>
            <Button
              onClick={handleDelete}
              className="h-12 px-6 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-2xl font-semibold hover:from-red-700 hover:to-pink-700"
            >
              Upload Again
            </Button>
          </div>
        </Card>
      )}

      {/* Error Message */}
      {error && status === 'idle' && (
        <Card className="bg-red-50 rounded-2xl p-4 border border-red-200">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </Card>
      )}

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreview && preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPreview(false)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center"
              >
                <X className="w-5 h-5 text-gray-900" />
              </button>
              <img 
                src={preview} 
                alt="License full view" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Card */}
      <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-200">
        <div className="flex items-start gap-2">
          <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-xs font-semibold text-blue-900 mb-1">Data Privacy</p>
            <p className="text-xs text-blue-700">
              Your license information is encrypted and used only for verification purposes. We comply with all data protection regulations.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
