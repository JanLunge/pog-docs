variables {
  # All environment variables from .env.dev will be automatically available here
  VERSION = ""
}
job "pog-docs" {
  datacenters = ["in"]
  type        = "service"

  meta {
    version = "${var.VERSION}"
  }

  update {
    max_parallel      = 2
    min_healthy_time  = "10s"
    healthy_deadline  = "3m"
    auto_revert      = true
  }

  group "pog-docs-group" {
    count = 1
    network {
      port "frontend" {
        to = 3000
      }
    }

    update {
      max_parallel     = 1
      canary          = 1
      min_healthy_time = "30s"
      healthy_deadline = "5m"
      auto_promote    = true
      auto_revert     = true
    }

    task "pog-docs-task" {
      driver = "docker"

      config {
        image = "ghcr.io/janlunge/pog-docs:latest"
        ports = ["frontend"]
        auth {
          username = var.GITHUB_USERNAME
          password = var.GITHUB_PASSWORD
        }
        force_pull = true
      }

      resources {
        cpu    = 200    # CPU shares
        memory = 80     # Memory in MB
      }

      service {
        name = "pog-docs"
        port = "frontend"
        tags = ["urlprefix-pog.heaper.de", "urlprefix-pog.janlunge.de"]

        check {
          name     = "pog-docs-tcp-check"
          type     = "tcp"
          interval = "10s"
          timeout  = "2s"
        }
      }
    }
  }
}
variable "GITHUB_USERNAME" {}
variable "GITHUB_PASSWORD" {}