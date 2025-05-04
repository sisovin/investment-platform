#!/bin/bash

# Monitoring setup script

# Install Prometheus
echo "Installing Prometheus..."
docker run -d --name prometheus -p 9090:9090 prom/prometheus

# Install Grafana
echo "Installing Grafana..."
docker run -d --name grafana -p 3000:3000 grafana/grafana

# Configure Prometheus to scrape metrics from the backend service
echo "Configuring Prometheus..."
cat <<EOF > prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'backend'
    static_configs:
      - targets: ['backend:3000']
EOF

docker cp prometheus.yml prometheus:/etc/prometheus/prometheus.yml
docker restart prometheus

# Print success message
echo "Monitoring setup completed"
