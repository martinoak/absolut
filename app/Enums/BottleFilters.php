<?php

namespace App\Enums;

enum BottleFilters: string
{
    case BLUE = 'Blue';
    case HUNDRED = '100';
    case BLANK = 'Blank';
    case DROP_OF_LOVE = 'Drop of Love';
    case ELECTRIK = 'Electrik';
    case ELYX = 'Elyx';
    case EXPOSURE = 'Exposure';
    case PREMIUM = 'Premium';
    case BASE = 'Flavours (Base)';
    case DISCONTINUED = 'Flavours (Discontinued)';
    case OTHER = 'Flavours (Other)';
    case CITY = 'City series';
    case BAG = 'Bag';
    case LIMITED = 'Limited Edition';
}
