type RendomNumberType = {
    value: number
}

type PositiveNumberType = RendomNumberType & {
    isPositive : boolean,
    isNegative? : never;
    isZero? : never;
}
type NegativeNumberType = RendomNumberType & {
    isNegative : boolean,
    isPositive? : never,
    isZero? : never;
}
type ZeroType = RendomNumberType & {
    isZero : boolean,
    isPositive?: never;
    isNegative?: never;
}

type RandomNumberProps = PositiveNumberType | NegativeNumberType | ZeroType;

export const RandomNumber = (props : RandomNumberProps)=>{
    return (
        <div>
          {props.value} {props.isPositive && 'positive'} {props.isNegative && 'negative'}{' '}
          {props.isZero && 'zero'}
        </div>
      )
}