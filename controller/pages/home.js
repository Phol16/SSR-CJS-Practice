export const home = (req, res)=>{
  res.status(200).render('index', {data: 
    ['https://plus.unsplash.com/premium_photo-1670006163348-b8eb307a80a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
    'https://plus.unsplash.com/premium_photo-1670006163348-b8eb307a80a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
    'https://plus.unsplash.com/premium_photo-1670006163348-b8eb307a80a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
  ]})
}
