
import CustomTable from "@/components/UI/organisms/CustomTable"
import Layout from "@/components/UI/organisms/Layout"
import { Box } from "@mui/material"

const Products = () => {
    
const rows = [
{  
    id: 1,
    name: "Cupcake",
    calories: 12.6,
    fat: 3.67,
    carbs: 23,
    protein: 12.4
}
];

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Dessert (100g serving)',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Calories',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Fat (g)',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Carbs (g)',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Protein (g)',
  },
];

    return(
        <Layout name="products">
            <Box>
                <CustomTable/>
            </Box>
        </Layout>
    )
}

export default Products