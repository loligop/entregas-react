import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
	const [data, setItems] = useState([]);

	let { id } = useParams();

	useEffect(() => {
		axios(`https://breakingbadapi.com/api/characters/${id}`)
        .then((res) => setItems(res.data)
		);
	}, [id]);
    return (
		<div>
			{data.map((item) => {
				return (
					<div>
						<ItemDetail item={item} />
					</div>
				);
			})}
		</div>
	);
}
export default ItemDetailContainer