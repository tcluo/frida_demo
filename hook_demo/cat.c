#include <stdio.h>

int main(int argc, char **argv)
{
	FILE *fp;
	char buf[128];
	char *file;
	int rs;

	if (argc < 1)
	{
		printf("Please give a file path\n");
		return -1;
	}

	file = argv[1];
	printf("Open file %s\n", file);
	fp = fopen(file, "r");
	while ((rs = fread(buf, 1, sizeof(buf), fp)) > 0)
	{
		fwrite(buf, 1, rs, stdout);
	}

	if (ferror(fp))
	{
		printf("File IO error\n");
	}

	fclose(fp);
}
