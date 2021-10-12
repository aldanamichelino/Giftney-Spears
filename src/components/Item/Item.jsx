import React from 'react';
import { Link } from 'react-router-dom';
import { ViewDetailsWidget } from '../ViewDetailsWidget/ViewDetailsWidget';
import { FavoriteWidget } from '../FavoriteWidget/FavoriteWidget';


export const Item = ({ id, name, price, img, description, imgDescription, category }) => {
    return (
        <div className="list__item relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-4 my-3 cursor-pointer">
            <div className="overflow-x-hidden rounded-2xl relative">
                <img className="w-full rounded-2xl object-cover" src={img} alt={imgDescription}/>
                <Link to={`/item/${id}`} className="widget__container absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                    <ViewDetailsWidget/>
                </Link>
                <p className="widget__container absolute right-2 bottom-2 bg-white rounded-full p-2 cursor-pointer group">
                    <FavoriteWidget/>
                </p>
            </div>
            <div className="list__item__info mt-4 px-2 p mb-2 flex justify-between">
                <div>
                    <p className="list__item__info__name text-lg font-semibold text-gray-900 mb-0 inconsolata">{ name }</p>
                    <p className="list__item__info__description text-justify text-gray-900 mb-0">{ description }</p>
                    <p className="list__item__info__price absolute text-md text-gray-800 mt-0"> $ { price }</p>
                </div>

            </div>
            
            <span className="list__item__info__pill">{ category }</span>
        </div>
    )
}
