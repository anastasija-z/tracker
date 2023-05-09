import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import ProgressBar from '@/components/ProgressBar.vue';

describe('ProgressBar.vue', () => {
    let wrapper = null

    beforeEach(() => {
        wrapper = mount(ProgressBar, {
            props: {
                percent: 30
            }
        })
    })

    it('renders the button', () => {
        expect(wrapper.find('#execute').text()).toBe('+1')
    })
})