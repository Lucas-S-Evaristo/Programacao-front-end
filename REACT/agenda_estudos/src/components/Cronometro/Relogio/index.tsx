import React from "react";
import Style from "./Relogio.module.scss";

export function Relogio() {
    return (
        <section>
            <span className={Style.relogioNumero}>0</span>
            <span className={Style.relogioNumero}>0</span>
            <span className={Style.relogioDivisao}>:</span>
            <span className={Style.relogioNumero}>0</span>
            <span className={Style.relogioNumero}>0</span>
            <span className={Style.relogioDivisao}>:</span>
            <span className={Style.relogioNumero}>0</span>
            <span className={Style.relogioNumero}>0</span>
            
        </section>
    )
}