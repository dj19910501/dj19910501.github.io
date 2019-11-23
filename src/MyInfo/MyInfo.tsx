import * as React from 'react';
import './myInfo.css';

export interface HelloProps { name: string }

export default class MyInfo extends React.Component<HelloProps, {}> {
    constructor(props: HelloProps) {
        super(props);
    }

    render() {
        return (
            <div id='myInfoContainer' className='my-info-container general-container'>
                <p>Welcome to my github page!</p>
                <p>
                    I am leading the front-end development at Hive9, a marketing performance management startup. Apart
                    from building new features to meet client's needs, I am also experienced in migrating existing
                    applications to newer technologies. My passion in work lies in building interactive, comprehensive 
                    and user friendly interfaces with minimum complexity.
                </p>
            </div>
        );
    }
}
