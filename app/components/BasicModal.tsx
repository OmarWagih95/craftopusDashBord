import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import { useState } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
//   bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  
  p: 8,
};

export default function BasicModal({order}:{order:any}) {
    console.log(order.name)
  const [open, setOpen] = React.useState(false);
  let totals=0;

  const [total, setTotal] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button color='secondary' className='cursor-pointer text-purple-500 hover:text-purple-700 underline' onClick={handleOpen}>details</Button>
      <Modal className='min-w-[80vw] px-6'
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='bg-white h-[80vh] overflow-y-scroll w-[90vw] px-10 lg:w-[70vw]'>
          <Typography className='flex font-bold justify-center' id="modal-modal-title" variant="h6" component="h2">
           <h2 className='text-black font-mono'>
             Order-Details
            </h2>
          </Typography>
          <div className='mt-2 flex flex-col '>
            <h4 className='text-black font-mono'>orderID : {order._id}</h4>

            {
            order.products.map((product:any) =>{
              totals=totals+(product.price*product.quantity);
              console.log(totals);
              // setTotal(total+(product.price*product.quantity))
              console.log(product.title);
           return  <div key={product.title} className='py-2 mt-3  border-b-2 border-gray-800 flex justify-between'>
            <div className='flex gap-2'>

             <div className='mt-3  relative w-[12vw] h-[18vh]'>
                  <Image className='rounded-lg' fill alt={product.title} src={product.imgUrl}></Image>
              </div>
              <div className='flex text-black font-mono justify-center flex-col'>
                <h4>{product.title}</h4>
                <h4>price : {product.price} </h4>
                <h4>quantity : {product.quantity} </h4>
                
              </div>
            </div>
            <div className='flex flex-col justify-end'>
               <span className='flex text-sm items-center text-purple-700'>
                 <p className='text-black font-mono text-lg'>total: {product.quantity*product.price}</p>EGP
                  
                </span>
            </div>
             </div>

            })}


          </div>

          <div className='flex gap-2 py-2 border-b-2 border-black flex-col'>
            <h3 className='text-black font-light font-mono'>
              address : {order.address}
            </h3>
            <h3 className='text-black font-light font-mono'>
              notes : {order.notes}
            </h3>
          </div>
          <div className='flex mt-3 justify-end px-2'>
          <span className='flex font-semibold items-center text-purple-700'>
          <h2 className='text-black font-mono'>total : {totals}</h2>EGP
                  
                </span>

          </div>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}