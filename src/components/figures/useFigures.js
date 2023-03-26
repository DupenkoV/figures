import { useSelector } from "react-redux";

export const useFigure = () => {
    const shapes = useSelector(state => state.shapes)
    const filter = useSelector(state => state.filter)
    return shapes.filter(item => {
        const color = item.color;
        const form = item.form
        return color === filter.find((item) => item === color) && filter.find((item) => item === form)
    })
}