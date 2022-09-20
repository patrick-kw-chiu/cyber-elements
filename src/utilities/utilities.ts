
import { COLOR, TEXT_POSITION_MAP, TEXT_SPREAD_SIZE_MAP, BOX_POSITION_MAP, BOX_SPREAD_SIZE_MAP } from '../constants/constants';

import {  Color, ColorScale, Spread } from '../typings/typings';


const getSpread = (spread) => {
    return {
        textPosition: TEXT_POSITION_MAP[spread],
        textSpreadSize: TEXT_SPREAD_SIZE_MAP[spread],
        boxPosition: BOX_POSITION_MAP[spread],
        boxSpreadSize: BOX_SPREAD_SIZE_MAP[spread],
    }
}



type getShadowType = {
    color: Color
    colorScale: ColorScale
    spread: Spread
}

export const getTextShadow = ({
    color = 'teal',
    colorScale = 500,
    spread = 3
} : getShadowType) => {
    const { textPosition, textSpreadSize } = getSpread(spread)

    // -${textPosition} -${textPosition} ${textSpreadSize} ${COLOR[color][colorScale]},
    // -${textPosition} 0 ${textSpreadSize} ${COLOR[color][colorScale]},
    // -${textPosition} ${textPosition} ${textSpreadSize} ${COLOR[color][colorScale]},

    // 0px -${textPosition} ${textSpreadSize} ${COLOR[color][colorScale]},
    // 0px ${textPosition} ${textSpreadSize} ${COLOR[color][colorScale]},

    // ${textPosition} -${textPosition} ${textSpreadSize} ${COLOR[color][colorScale]},
    // ${textPosition} 0 ${textSpreadSize} ${COLOR[color][colorScale]},
    // ${textPosition} ${textPosition} ${textSpreadSize} ${COLOR[color][colorScale]}

    return `
        -${textPosition} -${textPosition} ${textSpreadSize} ${COLOR[color][colorScale]},
        -${textPosition} ${textPosition} ${textSpreadSize} ${COLOR[color][colorScale]},

        ${textPosition} -${textPosition} ${textSpreadSize} ${COLOR[color][colorScale]},
        ${textPosition} ${textPosition} ${textSpreadSize} ${COLOR[color][colorScale]}
    `
}

export const getBoxShadow = ({
    color = 'teal',
    colorScale = 500,
    spread = 3
} : getShadowType) => {
    const { boxPosition, boxSpreadSize } = getSpread(spread)
    return `
        -${boxPosition} -${boxPosition} ${boxSpreadSize} ${COLOR[color][colorScale]},
        -${boxPosition} ${boxPosition} ${boxSpreadSize} ${COLOR[color][colorScale]},

        ${boxPosition} -${boxPosition} ${boxSpreadSize} ${COLOR[color][colorScale]},
        ${boxPosition} ${boxPosition} ${boxSpreadSize} ${COLOR[color][colorScale]},

        inset 0 0 ${boxSpreadSize} ${COLOR[color][colorScale]}; 
    `
}
