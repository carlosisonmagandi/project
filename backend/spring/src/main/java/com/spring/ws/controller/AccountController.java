package com.spring.ws.controller;

import com.spring.ws.entity.Account;
import com.spring.ws.impl.AccountService;
import com.spring.ws.repository.AccountRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AccountController {
    private final AccountService accountService;
    private final AccountRepository accountRepository;

    public AccountController(AccountService accountService, AccountRepository accountRepository) {
        this.accountService = accountService;
        this.accountRepository = accountRepository;
    }

    @GetMapping("/account")
    public List<Account> accountList() {
        return accountService.getAccount();
    }

    @PostMapping("/account")
    public Account addAccount(@RequestBody Account account) {
        return accountService.addAccount(account);
    }
    @DeleteMapping("account/{id}")
    public void deleteOrder(@PathVariable("id") Long id) {
        accountService.deleteAccount(id);
    }

}
