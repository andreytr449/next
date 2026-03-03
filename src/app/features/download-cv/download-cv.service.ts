import { downloadCsv } from '@/app/entities/api/questions/';

export const downloadQuestionsCsvService = {
  download: async (): Promise<void> => {
    const blob = await downloadCsv();

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'questions.csv';
    link.click();

    URL.revokeObjectURL(url);
  },
};
