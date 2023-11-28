import React from 'react';
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, .5);
`;

const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
`

const Modal = ({children, shouldShow, onRequestClose}) => {
    // const [shouldShow, setShouldShow] = useState(false);

    return (<>
            {/*<button type="button"  onClick={() => setShouldShow(true)}>Show Modal</button>*/}
            {shouldShow && (
                <ModalBackground onClick={() => onRequestClose(false)}>
                    <ModalBody onClick={(e) => e.stopPropagation()}>
                        <button type="button"  onClick={() => onRequestClose(false)}>Hide Modal</button>
                        {children}
                    </ModalBody>
                </ModalBackground>
            )}
        </>
    )

};

export default Modal;