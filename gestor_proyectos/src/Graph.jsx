/* eslint-disable react/prop-types */
import { GraphCanvas } from "reagraph";

export const Graph = ({ nodos, aristas }) => {
  return <GraphCanvas draggable nodes={nodos} edges={aristas} />;
};
