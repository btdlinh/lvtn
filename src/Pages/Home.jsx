import { Box } from '@mui/material';
import CardProduct from '../components/Body/Products/components/Card';
import Header from '../components/Header';

const arr = [
  {
    id: 1,
    name: 'Danh muc 1',
  },
  {
    id: 2,
    name: 'Danh muc 1',
  },
  {
    id: 3,
    name: 'Danh muc 1',
  },
  {
    id: 4,
    name: 'Danh muc 1',
  },
  {
    id: 5,
    name: 'Danh muc 1',
  },
  {
    id: 6,
    name: 'Danh muc 1',
  },
];

function Home() {
  return (
    <div>
      <Header />
      <Box className="m-4">
        <div className="flex flex-wrap gap-4 mb-5">
         {arr?.map(e=>(
            <>
             <CardProduct key={e.id}/>
            </>
         ))}
          
        </div>
      </Box>
    </div>
  );
}

export default Home;
