﻿/*
 * Squidex Headless CMS
 * 
 * @license
 * Copyright (c) Sebastian Stehle. All rights reserved
 */

import * as Ng2 from '@angular/core';

import { CurrencyConfig, DecimalSeparatorConfig } from './../configurations';

@Ng2.Pipe({
    name: 'money'
})
export class MoneyPipe {
    constructor(
        private readonly currency: CurrencyConfig,
        private readonly separator: DecimalSeparatorConfig
    ) {
    }

    public transform(value: number, args: string[]): any {
        const money = value.toFixed(2).toString();

        let result = money.substr(0, money.length - 3) + this.separator.value + '<span class="decimal">' + money.substr(money.length - 2, 2) + '</span>';

        if (this.currency.showAfter) {
            result = result + ' ' + this.currency.symbol;
        } else {
            result = this.currency.symbol + ' ' + result;
        }

        return result;
    }
}

