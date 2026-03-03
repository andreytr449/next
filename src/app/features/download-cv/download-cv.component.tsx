'use client';

import { useState } from 'react';
import { Button } from '@/app/shared/ui';
import { Download } from 'lucide-react';
import { downloadQuestionsCsvService } from './download-cv.service';

export const DownloadCV = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await downloadQuestionsCsvService.download();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to download file');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={handleDownload}>
      {isLoading ? (
        'Loading...'
      ) : (
        <span className="flex items-center gap-2">
          Download questions <Download />
        </span>
      )}
    </Button>
  );
};
