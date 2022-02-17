import { Table, Thead, Tr, Th, Tbody, Td, Text, TableCaption, Box } from "@chakra-ui/react";
import { IngredientsProps } from "../../types/interfaces";
interface TableTypes {
  tableContent: IngredientsProps[];
}

const TableComp = ({ tableContent }: TableTypes) => {
  return (
    <Box borderRadius={"md"} padding={2} border="1px solid">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th color="white" fontFamily={"poppins"}>
              Nombre
            </Th>
            <Th color="white" fontFamily={"poppins"}>
              Cantidad
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableContent.map((res) => (
            <Tr>
              <Td fontSize={"1rem"}>
                {res.name} {res.alt}
              </Td>
              <Td>{res.cantidad}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableComp;
