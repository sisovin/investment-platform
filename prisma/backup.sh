#!/bin/bash

# Database backup script

# Set variables
DB_CONTAINER_NAME="database"
BACKUP_DIR="/backups"
TIMESTAMP=$(date +"%F")
BACKUP_NAME="backup-$TIMESTAMP.sql"

# Create backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

# Dump the database to a SQL file
docker exec $DB_CONTAINER_NAME pg_dump -U user -d investment_platform > $BACKUP_DIR/$BACKUP_NAME

# Print success message
echo "Backup completed: $BACKUP_DIR/$BACKUP_NAME"
