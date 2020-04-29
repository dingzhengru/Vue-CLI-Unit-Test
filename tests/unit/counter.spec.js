// Import the `mount()` method from the test utils
// and the component you want to test
import { mount, shallowMount  } from '@vue/test-utils'
import Counter from '@/components/counter'

describe('Counter', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Counter)

  // 淺層渲染，不會去渲染其子組件
  // const wrapper = shallowMount(Counter)

  // 確認 HTML 內容
  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // 確認 HTML 內容
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  // 模擬使用者行為
  it('button click should increment the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })

  // 使用 async/await
  it('button click should increment the count text', async () => {
    expect(wrapper.text()).toContain('1')
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.text()).toContain('2')
  })
})