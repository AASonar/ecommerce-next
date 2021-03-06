import React, { FC, Children, isValidElement, useState } from "react";
import s from "./ProductSlider.module.css"
import { useKeenSlider } from "keen-slider/react"
import cn from "classnames"

const ProductSlider: FC = ({children}) => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },
  })


    return (
        <div className={s.root}>
            <div 
            ref={sliderRef as unknown as React.RefObject<HTMLDivElement>} 
            className="keen-slider h-full transition-opacity">
            <button
                onClick = {slider.current?.prev}
                className={cn(s.leftControl, s.control)}
            />
            <button
                onClick = {slider.current?.next}
                className={cn(s.rightControl, s.control)}
            />
            { Children.map(children, (child) => {
                
                if (isValidElement(child)) {
                    
                    return React.cloneElement(child, {
                        className: `${
                            child.props.className ? `${child.props.className}` : "" 
                        } keen-slider__slide`
                    })
                }

                return child
            }
            )}
            </div>
        </div>
    )

}

export default ProductSlider