export const bufferFromHex = (hexString: string) =>
  Buffer.from(
    new Uint8Array(
      (hexString.match(/.{1,2}/g) as string[] || [])
      .map((byteHex: any) => parseInt(byteHex, 16))
    )
  )