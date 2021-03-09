import React from "react";
import { withPerformance } from "storybook-addon-performance";
import ResponsiveList from "../ResponsiveList";
import "./responsiveListStory.scss";
import Button from "../../Button/Button";
import Search from "../../Search/Search";
import SplitButton from "../../SplitButton/SplitButton";
import Icon from "../../Icon/Icon";
import { Group, API, Moon, Sun, Bolt, Activity, Alert, Bookmark, Broom } from "../../Icon/Icons";
import { MenuItem } from "../../index";
import Menu from "../../Menu/Menu/Menu";
import DescriptionLabel from "../../storybook-helpers/description-label/description-label";

function SecondaryContentComponent() {
  return (
    <Menu>
      <MenuItem icon={Alert} title="Watch out" />
      <MenuItem icon={Activity} title="History" />
    </Menu>
  );
}

export const Sandbox = () => (
  <div style={{ width: "100%" }}>
    <DescriptionLabel>
      Use this component when you want to collapse elements into a menu button which appends to the end of the row. The
      list wraps the element with <code>display: flex;</code> property and <code>overflow: hidden</code> in order to
      calculate the
    </DescriptionLabel>
    <br />
    <div style={{ width: "80%" }}>
      <ResponsiveList id="Knobs" className="responsive-story" menuButtonSize={ResponsiveList.menuButtonSizes.MEDIUM}>
        <SplitButton size={SplitButton.sizes.MAIN} marginRight secondaryDialogContent={<SecondaryContentComponent />}>
          Add Item
        </SplitButton>
        <div className="responsive-lst-search">
          <Search
            size={Search.sizes.MEDIUM}
            placeholder="search for content"
            iconName="fa-search"
            secondaryIconName="fa-close"
          />
        </div>
        <Button kind={Button.kinds.TERTIARY} marginLeft>
          <Icon icon={Broom} ignoreFocusStyle className="responsive-icon-margin" />
          Clean
        </Button>
        <Button kind={Button.kinds.TERTIARY} marginLeft>
          <Icon icon={Group} ignoreFocusStyle />
        </Button>
        <Button kind={Button.kinds.TERTIARY} marginLeft>
          <Icon icon={Moon} ignoreFocusStyle />
        </Button>
        <Button kind={Button.kinds.TERTIARY} marginLeft>
          <Icon icon={API} ignoreFocusStyle />
        </Button>
        <Button kind={Button.kinds.TERTIARY} marginLeft>
          <Icon icon={Sun} ignoreFocusStyle />
        </Button>
        <Button kind={Button.kinds.TERTIARY} marginLeft>
          <Icon icon={Bolt} ignoreFocusStyle />
        </Button>
      </ResponsiveList>
    </div>
  </div>
);

export default {
  title: "Components/ResponsiveList",
  component: ResponsiveList,
  decorators: [withPerformance]
};
