import * as XLSX from 'xlsx';

export const readTestData = (filePath: string): any[] => {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });

  return sheetData.slice(1);
};
