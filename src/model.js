import image from './assets/bayern.jpg'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

const text = ` Основан в 1900 году`

export const model = [
    new TitleBlock( 'Бавария (футбольный клуб)', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #bd3a3e, #ffd5e5)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'

        }
    }),
    new ImageBlock( image, {
        styles: {
            padding: '3rem 0',
            display: 'flex',
            'justify-content': 'center',
        },
        imageStyles: {
            width: '50%',
            height: 'auto'

        },
        alt: 'Это картинка'
    }),
    new ColumnsBlock( ['30-кратный чемпион Германии (1931/32, 1968/69, 1971/72, 1972/73, 1973/74, 1979/80, 1980/81, 1984/85, 1985/86, 1986/87, 1988/89, 1989/90, 1993/94, 1996/97, 1998/99, 1999/00, 2000/01, 2002/03, 2004/05, 2005/06, 2007/08, 2009/10, 2012/13, 2013/14, 2014/15, 2015/16, 2016/17, 2017/18, 2018/19, 2019/20)',
        '20-кратный обладатель Кубка Германии (1956/57, 1965/66, 1966/67, 1968/69, 1970/71, 1981/82, 1983/84, 1985/86, 1997/98, 1999/00, 2002/03, 2004/05, 2005/06, 2007/08, 2009/10, 2012/13, 2013/14, 2015/16, 2018/19, 2019/20)',
        'Шестикратный победитель Лиги чемпионов (1973/74, 1974/75, 1975/76, 2000/01, 2012/13, 2019/20)'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
new TextBlock (text, {
    styles: {
        background: 'linear-gradient(to left, #f2994a, #f2c94c)',
        padding: '1rem',
        'font-weight': 'bold',
        'text-align': 'center',
    }
}),
]