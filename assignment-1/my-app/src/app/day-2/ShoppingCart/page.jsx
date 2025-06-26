"use client"

import ShoppingCart from "@/components/components-2/ShoppingCart"
import { ShoppingCartContext } from "../../../context/context/ShoppingCartContext"

export default function showShoppingCart()
{
    return(<>
    <ShoppingCartContext>
    <ShoppingCart/>
    </ShoppingCartContext>
    </>)
}