import React from "react";
import { shallow } from "enzyme";
import { Notifications } from "./Notifications";




describe('Notification component', () => {
    // test that Notifications renders without crashing
    it('renders without crashing', () => {
        const notification = shallow(<Notifications />)
        expect(notification).toBeTruthy();
    })

    // verify that Notifications renders three list items
    it('renders 3 list items', () => {
        const notification = shallow(<Notifications />);
        expect(notification.find('li')).toHaveLength(3)
    })

    // verify that Notifications renders the text Here is the list of notifications
    it('', () => {
        const notification = shallow(<Notifications />)
        expect(notification.find('p').text()).toBe('Here is the list of notifications')
    })
})

