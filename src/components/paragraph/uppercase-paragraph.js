const Paragraph = ({color, children}) => {
 return <p style={{ color: color, textTransform: 'uppercase' }}> {children}</p>
}

Paragraph.defaultProps = {
 color: 'magenta'
}

export default Paragraph