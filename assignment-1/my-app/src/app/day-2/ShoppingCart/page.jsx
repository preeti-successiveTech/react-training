"use client"

import ShoppingCart from "@/app/day-2/components-2/ShoppingCart"
import { ShoppingCartContext } from "../context/ShoppingCartContext"

export default function showShoppingCart()
{
    return(<>
    <ShoppingCartContext>
    <ShoppingCart/>
    </ShoppingCartContext>
    </>)
}