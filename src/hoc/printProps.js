const PrintProps = Component => {
    return (props) => {
        return <Component {...props} />
    }
};

export default PrintProps;