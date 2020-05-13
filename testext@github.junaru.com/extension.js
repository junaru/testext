const ExtensionUtils = imports.misc.extensionUtils;
const Extension = ExtensionUtils.getCurrentExtension();
const GObject = imports.gi.GObject;
const St = imports.gi.St;
const Main = imports.ui.main;
const PopupMenu = imports.ui.popupMenu;
const PanelMenu = imports.ui.panelMenu;

let TestMenuButton = GObject.registerClass (
    class TestMenuButton extends PanelMenu.Button {
        _init() {
            super._init(0.0, Extension.metadata.name);

            let hbox = new St.BoxLayout({
                       style_class: 'panel-status-menu-box'
            });

            this.panelIcon = new St.Icon({
                icon_name: 'media-playback-start',
                style_class: 'system-status-icon'
            });

            hbox.add_actor(this.panelIcon);

            this.add_actor(hbox);
            this.add_style_class_name('panel-status-button');
            
            // reactive popup item displays wihtout problems
            this.testItem1 = new PopupMenu.PopupBaseMenuItem({ reactive: true, can_focus: false });
            this.testBox1 = new St.BoxLayout({ name: 'testBox1' });
            this.testLabel1 = new St.Label({ text: "testLabel1", });

            this.testBox1.add(this.testLabel1);
            this.testItem1.add(this.testBox1);
            this.menu.addMenuItem(this.testItem1);
            
            // non-reactive popup item text color is same as background
            this.testItem2 = new PopupMenu.PopupBaseMenuItem({ reactive: false, can_focus: false });
            this.testBox2 = new St.BoxLayout({ name: 'testBox2' });
            this.testLabel2 = new St.Label({ text: "testLabel2", });

            this.testBox2.add(this.testLabel2);
            this.testItem2.add(this.testBox2);
            this.menu.addMenuItem(this.testItem2);
            
        }

        destroy() {
            super.destroy();
        }
    }
);

let testMenu;

function enable() {
    testMenu = new TestMenuButton();
    Main.panel.addToStatusArea('testMenu', testMenu, 0, 'right');
}

function disable() {
    testMenu.destroy();
}
