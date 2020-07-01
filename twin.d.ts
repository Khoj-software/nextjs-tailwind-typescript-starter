// twin.d.ts
import 'twin.macro'
import styledComponent, { css as cssProperty } from 'styled-components'
import {} from 'styled-components/cssprop'

declare module 'twin.macro' {
    const css: typeof cssProperty
    const styled: typeof styledComponent
}
