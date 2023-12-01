import QRCode from "qrcode"

export default async function createQR(data: any) {
    try {

        console.log('data for qrcode :', data)
        QRCode.toFile(`../qrcodes/qrcode_${data}.png`, [{ data: String(data) }], { width: 300 }, (err: any) => {
            if (err) {

                console.log('error creating qrcode :', err)
            }

            console.log(`success`, '✓ Okay, Has successfully generate & save your qrcode.')

        })

        // return `https://150.95.80.176/qrcodes/qrcode_${data}.png`
        // return `https://softbearsolution.com/qrcodes/qrcode_${String(data)}.png`
        return `https://www.gforcesolution.com/app/2023/honda-checkin-2023/qrcodes/qrcode_${String(data)}.png`

    } catch (err) {
        console.log('error :', err)
        return false
    }

}   