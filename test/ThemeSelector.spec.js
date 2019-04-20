import { shallowMount, createLocalVue } from '@vue/test-utils';
import ThemeSelector from '@/components/ThemeSelector.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('ThemeSelector', () => {
  let getters;
  let state;
  let store;
  let mutations;

  beforeEach(() => {
    state = {
      themes: [
        {
          value: 'darky',
          href: 'https://bootswatch.com/4/darkly/bootstrap.min.css',
        },
      ],
      theme: {
        value: 'darky',
        href: 'https://bootswatch.com/4/darkly/bootstrap.min.css',
      },
    };

    getters = {
      clicks: () => 2,
      inputValue: () => 'input',
      getThemeById: (state) => (value) =>
        state.themes.find((theme) => theme.value === value),
    };

    mutations = {
      setTheme(currentState, theme) {
        currentState.theme = theme;
      },
    };

    store = new Vuex.Store({
      state,
      getters,
      mutations,
    });
  });

  const factory = () =>
    shallowMount(ThemeSelector, {
      store,
      localVue,
    });

  test('mounts properly', () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders properly', () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('theme getter', () => {
    const wrapper = factory();
    // wrapper.vm.currentTheme = 'darkly';
    expect(wrapper.vm.currentTheme).toBeTruthy();
  });

  test('head', () => {
    ThemeSelector.$store = store;
    expect(ThemeSelector.head()).toBeTruthy();
  });
});
