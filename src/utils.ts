import blueprint from "../plutus.json";

export type Validators = {
  nfcChip: string;
};

export function readValidators(): Validators {
  const nfcChip = blueprint.validators.find(
    (v) => v.title === "idamint.nfcChip.spend"
  );
 
  if (!nfcChip) {
    throw new Error("NFC Chip validator not found");
  }
 
  return {
    nfcChip: nfcChip.compiledCode,
  };
}