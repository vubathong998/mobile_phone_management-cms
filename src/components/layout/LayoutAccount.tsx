import { FC, ReactNode } from 'react';

interface IProp {
    children: ReactNode;
}

const LayoutAccount: FC<IProp> = (props) => {
    const { children } = props;

    return <div>{children}</div>;
};

export default LayoutAccount;
