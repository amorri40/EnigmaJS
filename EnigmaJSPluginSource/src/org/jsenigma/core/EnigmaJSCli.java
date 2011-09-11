package org.jsenigma.core;

/*
 * Copyright (C) 2011 IsmAvatar <IsmAvatar@gmail.com>
 * 
 * This file is part of EnigmaJS Plugin.
 * EnigmaJS Plugin is free software and comes with ABSOLUTELY NO WARRANTY.
 * See LICENSE for details.
 */

import java.io.File;
import java.io.FileNotFoundException;

import org.lateralgm.components.impl.ResNode;
import org.lateralgm.file.GmFile;
import org.lateralgm.file.GmFileReader;
import org.lateralgm.file.GmFormatException;
import org.lateralgm.main.LGM;
import org.lateralgm.resources.Script;
import org.lateralgm.resources.library.LibManager;

import com.alasdairmorrison.LGMUtility.LGMUtilityMain;

public class EnigmaJSCli
	{
	public static final String prog = "EnigmaJS"; //$NON-NLS-1$
	

	public static boolean syntax = false;

	public static void error(String err)
		{
		System.out.println(prog + ": " + err);
		System.exit(-1);
		}

	public static void main(String[] args)
		{
		if (args.length != 1) error("no input file");

		if (args[0].equals("-?") || args[0].equals("--help"))
			{
			System.out.println("pass in the game.gmk");
			System.exit(-1);
			}

		if (args[0].equals("-s") || args[0].equals("--syntax")) syntax = true;

		try
			{
			InitReturn r = initailize(args[0],null);
			
			//Apply regex
			LGM.currentFile=r.f;
			LGM.root=r.root;
			LGMUtilityMain.doAllRegex();
			r.f=LGM.currentFile;
			
			//now compile to javascript
			JSEnigmaWriter.writeResources();
			
			System.exit(0);
			}
		catch (Exception e)
			{
			e.printStackTrace();
			}
		}

	static class InitReturn
		{
		GmFile f;
		ResNode root;
		String error; //contains String on toolchain failure during libInit
		}

	public static InitReturn initailize(String fn, ResNode root) throws FileNotFoundException,
			GmFormatException
		{
		if (!new File(fn).exists()) throw new FileNotFoundException(fn);
		InitReturn r = new InitReturn();
		LibManager.autoLoad();
		r.root = root == null ? new ResNode("Root",(byte) 0,null,null) : root; //$NON-NLS-1$;
		r.f = GmFileReader.readGmFile(fn,r.root);
		return r;
		}




	public static void compile(GmFile f, ResNode root)
			throws FileNotFoundException,GmFormatException
		{

		
		}

	

	
	}
