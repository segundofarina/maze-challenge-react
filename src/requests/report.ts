import axios from "./axios";

export const sendMovements = async (totalMoves: number): Promise<void> => {
  const response = await axios.get<void>(`/5df38f523100006d00b58560`);
  return;
};
