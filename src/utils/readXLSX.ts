
const XLSX = require('xlsx')

export function readXLSX(filePath: string) {
    // convert xlsx to csv
    const file = XLSX.readFile(filePath)
    // console.log('file :', file)
    const sheets = file.SheetNames as any[]
    console.log('sheet name :', sheets)

    const data = [] as any[]


    const sheetPage = 1
    let sheetData = XLSX.utils.sheet_to_json(file.Sheets[file.SheetNames[sheetPage - 1]])
    sheetData.forEach((res: any, index: any) => {
        console.log('Row :', (index + 1), res)
        data.push(res)
    })

    // console.log('data  :', data)
    return sheetData
}