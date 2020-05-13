#!/usr/bin/make -f

UUID := testext@github.junaru.com

SRC_DIR := $(UUID)

INSTALLBASE := $(HOME)/.local/share/gnome-shell/extensions
INSTALL_DIR := $(INSTALLBASE)/$(UUID)

default: install


install: 
	rm -rf $(INSTALL_DIR)
	mkdir -p $(INSTALL_DIR)
	cp -r $(SRC_DIR)/* $(INSTALL_DIR)
