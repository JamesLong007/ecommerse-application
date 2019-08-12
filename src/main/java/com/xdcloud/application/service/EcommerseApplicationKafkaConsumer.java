package com.xdcloud.application.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class EcommerseApplicationKafkaConsumer {

    private final Logger log = LoggerFactory.getLogger(EcommerseApplicationKafkaConsumer.class);
    private static final String TOPIC = "topic_ecommerseapplication";

    @KafkaListener(topics = "topic_ecommerseapplication", groupId = "group_id")
    public void consume(String message) throws IOException {
        log.info("Consumed message in {} : {}", TOPIC, message);
    }
}
