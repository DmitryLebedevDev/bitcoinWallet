export const bufferToHex = (buffer: Buffer) => (
  Array.from(new Uint8Array(buffer))
       .map(byte => byte.toString(16))
       .join('')
)