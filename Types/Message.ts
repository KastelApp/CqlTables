import type { types } from "@kastelapp/cassandra-driver";

interface Author {
	iconUrl: string;
	name: string;
}

interface Footer {
	text: string;
	timestamp: Date;
}

interface Field {
	description: string;
	title: string;
}

interface MainObject {
	author: Author;
	color: string;
	description: string;
	fields: Field[];
	footer: Footer;
	imageUrl: string;
	thumbnailUrl: string;
	title: string;
	url: string;
}

interface Messages {
	allowedMentions: number;
	attachments: string[];
	authorId: string;
	bucket: string;
	channelId: string;
	content: string;
	embeds: MainObject[];
	flags: number;
	mentionChannels: string[];
	mentionRoles: string[];
	mentions: string[];
	messageId: types.Long | bigint | string;
	replyingTo: string | null;
	updatedDate: Date | null;
}

export default Messages;

export type { Author, Footer, Field, MainObject };
