import ListItem from './components/listItem/index.jsx';
import Parent from './components/props/parent.jsx'
import State from './components/state/index.jsx'
import StateParent from './components/state/parent.jsx'
import ItemA from './components/highOrderComponents/index.jsx';

import HomeClass from './components/route/home.jsx';
import AdminClass from './components/route/admin.jsx';
import ProductsClass from './components/route/products.jsx';
import { Route, Routes } from 'react-router-dom';

// const listData = [
// 	{ name:'react', id: 1 },
// 	{ name: 'vue', id: 2 }
// ]

const listData = { name:'react', id: 1 }

function App() {
	return (
		<div className="App">
			<ListItem data={listData}></ListItem> 
			<Parent />
			<State />
			<StateParent />
			<ItemA></ItemA>
			<Routes>
				<Route path='/products' element={<ProductsClass />}/>
				<Route path='/admin' element={<AdminClass />} />
            	<Route path='/' element={ <HomeClass/> } />
			</Routes>
		</div>
	);
	// return (
	// 	<div>
	// 		{
	// 			listData.map(item =>{
	// 				return <ListItem data={item} key={item.id}></ListItem>
	// 			})

	// 		}
	// 	</div>
	// )
}

export default App;
