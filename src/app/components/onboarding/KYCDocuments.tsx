import { useState } from 'react';
import { motion } from 'motion/react';
import { Upload, Camera, Image as ImageIcon, FileText, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface KYCDocumentsProps {
  onNext: () => void;
}

export function KYCDocuments({ onNext }: KYCDocumentsProps) {
  const [uploaded, setUploaded] = useState(false);

  return (
    <div className="min-h-screen w-full max-w-[375px] mx-auto flex flex-col bg-gradient-to-b from-purple-50 to-blue-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 mt-12"
      >
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
          <FileText className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Upload Documents</h1>
        <p className="text-gray-600">Upload any government-issued ID</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex-1"
      >
        <div className="bg-white rounded-3xl p-6 shadow-md mb-6">
          <h3 className="font-bold mb-4">Accepted Documents</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span>Aadhaar Card</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span>PAN Card</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span>Driving License</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span>Passport</span>
            </div>
          </div>
        </div>

        {!uploaded ? (
          <div className="space-y-4">
            <button
              onClick={() => setUploaded(true)}
              className="w-full p-8 border-2 border-dashed border-blue-300 rounded-3xl hover:border-blue-500 hover:bg-blue-50/50 transition-all"
            >
              <Upload className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <p className="font-semibold mb-2">Upload from Device</p>
              <p className="text-sm text-gray-600">Tap to select files</p>
            </button>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setUploaded(true)}
                className="p-6 bg-white rounded-3xl shadow-md hover:shadow-lg transition-all"
              >
                <Camera className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <p className="text-sm font-semibold">Camera</p>
              </button>
              <button
                onClick={() => setUploaded(true)}
                className="p-6 bg-white rounded-3xl shadow-md hover:shadow-lg transition-all"
              >
                <ImageIcon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-sm font-semibold">Gallery</p>
              </button>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-6 mb-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Document Uploaded</h4>
                <p className="text-sm text-gray-600">aadhaar_front.jpg</p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Button
          onClick={onNext}
          disabled={!uploaded}
          className="w-full h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg disabled:opacity-50"
        >
          Submit & Verify
        </Button>
      </motion.div>
    </div>
  );
}
