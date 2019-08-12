package com.xdcloud.application.web.rest;

import com.xdcloud.application.service.EcommerseApplicationKafkaProducer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/ecommerse-application-kafka")
public class EcommerseApplicationKafkaResource {

    private final Logger log = LoggerFactory.getLogger(EcommerseApplicationKafkaResource.class);

    private EcommerseApplicationKafkaProducer kafkaProducer;

    public EcommerseApplicationKafkaResource(EcommerseApplicationKafkaProducer kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }

    @PostMapping(value = "/publish")
    public void sendMessageToKafkaTopic(@RequestParam("message") String message) {
        log.debug("REST request to send to Kafka topic the message : {}", message);
        this.kafkaProducer.sendMessage(message);
    }
}
