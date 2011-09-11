/*
 * Copyright (C) 2011 Alasdair Morrison <amorri40@gmail.com>
 * Copyright (C) 2008-2011 IsmAvatar <IsmAvatar@gmail.com>
 * 
 * This file is part of EnigmaJS Plugin.
 * 
 * EnigmaJS Plugin is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * EnigmaJS Plugin is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License (COPYING) for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

package org.jsenigma.core;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.IOException;
import java.util.prefs.Preferences;

import javax.swing.JMenu;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;

import org.jsenigma.messages.Messages;
import org.lateralgm.main.LGM;

public class JSEnigmaRunner implements ActionListener {

	private JMenuItem run;
	public static boolean SHUTDOWN;
	public static final File WORKDIR = LGM.workDir.getParentFile();
	public static EnigmaJSFrame ef = new EnigmaJSFrame();

	public JSEnigmaRunner() {
		populateMenu();
		Runtime.getRuntime().addShutdownHook(new Thread() {
			// Add hook so the updater knows when the application has been
			// shutdown
			public void run() {
				SHUTDOWN = true;
			}
		});

		/*
		 * new Thread() { public void run() { //Disable updates by removing
		 * plugins/shared/svnkit.jar (e.g. linux packages) Preferences root =
		 * Preferences.userRoot().node("/org/enigma"); //$NON-NLS-1$ boolean
		 * rebuild = root.getBoolean("NEEDS_REBUILD",false); //$NON-NLS-1$
		 * root.putBoolean("NEEDS_REBUILD",false); //$NON-NLS-1$ int updates =
		 * attemptUpdate(); //displays own error if (updates == -1) {
		 * System.out.println("Update failed!"); return; } if (updates == 1) {
		 * System.out.println("Update succesful!"); } } }.start(); curently
		 * broken
		 */
	}

	private void populateMenu() {
		JMenu menu = new JMenu("EnigmaJS");
		run = new JMenuItem("Compile to HTML5"); //$NON-NLS-1$
		run.addActionListener(this);
		menu.add(run);
		LGM.frame.getJMenuBar().add(menu, 1);
	}

	@Override
	public void actionPerformed(ActionEvent ae) {

		Object s = ae.getSource();
		if (s == run)
			html5();
	}

	private void html5() {
		String calling = "Starting Html5 convert"; //$NON-NLS-1$
		System.out.println(calling);
		ef.ta.append(calling);
		ef.setVisible(true);
		

		new Thread() {
			public void run() {
				try {
					ef.progress(10, "Writing game to html5");
					JSEnigmaWriter.writeResources();
					File f = new File("EnigmaJS"+File.separator+"CanvasVersion.html");
					ef.ta.append("Finished convert, play your game using this url: "+f.getAbsolutePath()+"\n");
					ef.progress(100, "Finished");
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}.start();

		// 
	}

	/**
	 * Attempts to checkout/update. Returns 0/1 on success, -1 on aborted
	 * checkout, -2 on failure, -3 on missing SvnKit
	 */
	public int attemptUpdate() {
		try {
			int up = EnigmaJSUpdater.checkForUpdates(ef);
			if (EnigmaJSUpdater.needsRestart) {
				Preferences.userRoot()
						.node("/org/enigma").putBoolean("NEEDS_REBUILD", true); //$NON-NLS-1$ //$NON-NLS-2$
				JOptionPane.showMessageDialog(null, Messages
						.getString("EnigmaRunner.INFO_UPDATE_RESTART")); //$NON-NLS-1$
				System.exit(120); // exit code 120 lets our launcher know to
									// restart us.
			}
			return up;
		}
		/**
		 * Usually you shouldn't catch an Error, however, in this case we catch
		 * it to abort the module, rather than allowing the failed module to
		 * cause the entire program/plugin to fail
		 */
		catch (NoClassDefFoundError e) {
			System.err.println(Messages
					.getString("EnigmaRunner.WARN_UPDATE_MISSING_SVNKIT")); //$NON-NLS-1$
			e.printStackTrace();
			return -3;
		}
	}
} // end of class
